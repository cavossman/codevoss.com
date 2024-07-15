terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  profile = "default"
  region  = "us-west-1"
}

resource "aws_s3_bucket" "nextjs_bucket" {
  bucket = "codevoss.com"
}

resource "aws_s3_bucket_policy" "nextjs_bucket_policy" {
  bucket = aws_s3_bucket.nextjs_bucket.bucket

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.nextjs_bucket.arn}/*",
        Condition = {
          StringLike = {
            "aws:Referer" : [
              "http://${aws_cloudfront_distribution.nextjs_distribution.domain_name}",
              "https://${aws_cloudfront_distribution.nextjs_distribution.domain_name}"
            ]
          }
        }
      }
    ]
  })
}

# Policy for https://github.com/marketplace/actions/s3-deploy
resource "aws_iam_policy" "github_actions_policy" {
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "AllowS3BucketManipulation",
        "Effect" : "Allow",
        "Action" : [
          "s3:PutObject",
          "s3:GetObject",
          "s3:DeleteObject",
          "s3:ListMultipartUploadParts",
          "s3:AbortMultipartUpload",
          "s3:ListBucket"
        ],
        "Resource" : "${aws_s3_bucket.nextjs_bucket.arn}/*"
      },
      {
        "Sid" : "AllowS3BucketListing",
        "Effect" : "Allow",
        "Action" : [
          "s3:ListBucket"
        ],
        "Resource" : "${aws_s3_bucket.nextjs_bucket.arn}"
      },
      {
        "Sid" : "CFInvalidation",
        "Effect" : "Allow",
        "Action" : "cloudfront:CreateInvalidation",
        "Resource" : "${aws_cloudfront_distribution.nextjs_distribution.arn}"
      }
    ]
  })
}

resource "aws_iam_user" "github_actions_user" {
  name = "github.actions-codevoss.com"
}

resource "aws_iam_user_policy_attachment" "attach_policy_to_github_actions_user" {
  user       = aws_iam_user.github_actions_user.name
  policy_arn = aws_iam_policy.github_actions_policy.arn
}

resource "aws_cloudfront_distribution" "nextjs_distribution" {
  origin {
    domain_name = aws_s3_bucket.nextjs_bucket.bucket_regional_domain_name
    origin_id   = "S3-${aws_s3_bucket.nextjs_bucket.bucket}"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.nextjs_bucket.bucket}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  aliases = ["codevoss.com"]

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:782591407286:certificate/d71d7f9a-5e1c-4e68-9530-9eaf68f4d3f2"
    ssl_support_method  = "sni-only"
  }
}