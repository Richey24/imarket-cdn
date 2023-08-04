function getSubDomain(uri: string) {
    const subdomainRegex = /^(?:https?:\/\/)?([^./]+)\./;

    const match = uri.match(subdomainRegex);
    const subdomain = match ? match[1] : null;
    return subdomain
}

export { getSubDomain }