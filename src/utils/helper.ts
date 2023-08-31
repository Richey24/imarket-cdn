function getSubDomain(uri: string) {
    const subdomainRegex = /^(?:https?:\/\/)?([^./]+)\./;

    const match = uri.match(subdomainRegex);
    const subdomain = match ? match[1] : null;
    return subdomain
}

const socialMap = {
    facebook: "social-facebook icon-facebook",
    twitter: "social-twitter icon-twitter",
    instagram: "social-instagram icon-instagram",
};

export { getSubDomain ,socialMap}