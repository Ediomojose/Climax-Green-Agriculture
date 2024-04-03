import { Helmet } from "react-helmet-async";

const SeoWrapper = (
  title,
  description,
  name,
  type,
  pageName,
  url,
  imageUrl
) => {
  return (
    <Helmet>
      {/* <!-- Primary Meta Tags --> */}
      <title>
        {title} -- {pageName}
      </title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content={type} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SeoWrapper;
