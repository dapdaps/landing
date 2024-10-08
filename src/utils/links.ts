export const openLink = (link: string, isBlank = true) => {
  if (!link) return;
  const flag = link.startsWith('http');
  window.open(flag ? link : `${window.location.origin}${link}`, isBlank ? '_blank' : '_self');
  return flag;
};

export const openXShareLink = (text: string, isBlank = true) => {
  window.open(`https://twitter.com/intent/tweet?text=${text}`, isBlank ? '_blank' : '_self');
};

export const openAppLink = (link: string, target: '_blank' | '_self' | undefined = '_blank') => {
  if (!link) return;
  window.open(link.startsWith('http') ? link : `https://app.dapdap.net${link}`, target);
}