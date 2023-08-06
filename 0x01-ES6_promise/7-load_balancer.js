// load_balancer

function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([chinaDownload, USDownload]);
}

export default loadBalancer;
