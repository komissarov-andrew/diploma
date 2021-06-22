module "vpc" {
  source = "git::ssh://git@github.com/reactiveops/terraform-vpc.git?ref=5.0.1"

  aws_region = "eu-central-1"
  az_count   = 3
  aws_azs    = "eu-central-1a, eu-central-1b, eu-central-1c"

  global_tags = {
    "kubernetes.io/cluster/${local.cluster_name}" = "shared"
  }
}