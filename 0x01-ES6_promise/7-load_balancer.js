// load_balancer

async function loadBalancer(chinaDownload, USDownload) {
  return await Promise.any([chinaDownload, USDownload]);
}

export default loadBalancer;
