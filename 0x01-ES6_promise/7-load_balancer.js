// load_balancer

function loadBalancer(chinaDownload, USDownload) {
  return await Promise.any([chinaDownload, USDownload]);
}

export default loadBalancer;
