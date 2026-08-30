export const architecture = [
  { title: 'Git Repository', detail: 'Declarative manifests · single source of truth' },
  { title: 'CI/CD', detail: 'Build · test · image scanning · promotion' },
  { title: 'ArgoCD / GitOps', detail: 'Continuous, auditable sync to the cluster' },
  { title: 'Kubernetes', detail: 'Scheduling · autoscaling · self-healing' },
  { title: 'vLLM', detail: 'High-throughput model serving engine' },
  { title: 'GPU Model Serving', detail: 'Batched inference on GPU nodes' },
  { title: 'API / Authentication', detail: 'Access control · rate limiting · routing' },
  { title: 'Prometheus + Grafana', detail: 'Metrics · dashboards · alerting' },
] as const

export const demonstrates = [
  'Reproducible deployments',
  'GitOps',
  'Model serving',
  'GPU workloads',
  'Authentication',
  'Health checks',
  'Monitoring',
  'Latency tracking',
  'GPU utilization tracking',
  'CI/CD',
  'Rollback capability',
  'Production observability',
] as const

// NOTE: These are intentionally placeholders. Do NOT invent numbers.
// Replace with real measured results once benchmarks are run.
export const benchmark = [
  { label: 'Model', value: 'Coming soon' },
  { label: 'GPU', value: 'Coming soon' },
  { label: 'Serving Engine', value: 'vLLM' },
  { label: 'Tensor Parallelism', value: 'Coming soon' },
  { label: 'TTFT', value: 'Coming soon' },
  { label: 'Throughput', value: 'Coming soon' },
  { label: 'P95 Latency', value: 'Coming soon' },
  { label: 'GPU Utilization', value: 'Coming soon' },
  { label: 'Concurrent Requests', value: 'Coming soon' },
] as const

export const screenshots = [
  'Grafana dashboard',
  'Kubernetes workloads',
  'GitOps / ArgoCD',
  'CI/CD deployment',
  'API testing',
] as const
