export const AdsGrid = ({ data }) => {
  console.log("data", data);
  return (
    <div>
      {data.length &&
        data.map((ad) => {
          return (
            <>
              <div>company url: {ad.company.url}</div>
              <div>company name: {ad.company.name}</div>
              <div>CTA: {ad.cta}</div>
              <div>Description: {ad.description}</div>
              <div>Headline: {ad.headline}</div>
              <div>Image Url: {ad.imgUrl}</div>
              <div>primary Text: {ad.primaryText}</div>
            </>
          );
        })}
    </div>
  );
};
