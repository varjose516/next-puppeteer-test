import React from 'react';

const PUPPETEER_API = process.env.NEXT_PUBLIC_PUPPETEER_API;
const sizes = ['mobile', 'desktop'];
const Home = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    const previewPoll = async () => {
      let result;
      try {
        result = await Promise.all(
          sizes.map((size) =>
            fetch(`${PUPPETEER_API}/render?size=${size}&font=graphik`)
          )
        );
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        setLoading(false);
      }

      try {
        await Promise.all(
          result.map(async (res, index) => {
            const blob = await res.blob();
            const image = document.createElement('img');
            const imageObjectURL = URL.createObjectURL(blob);
            image.src = imageObjectURL;
            image.style.width = '100%'
            image.style.height = '100%'
            const container = document.getElementById(
              `shared-poll-preview-${sizes[index]}`
            );
            if (container) {
              container.innerHTML = '';
              container.append(image);
            }
          })
        );
        setLoading(false);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        setLoading(false);
      }
    };
    previewPoll();
  }, []);  

  return (
    <>
      <div className="template-wrapper pt-10">
        <div className="flex justify-between">
          <h4 className="text-xl leading-7 font-bold text-gray-700 mb-5">
            Result:
          </h4>
        </div>
        <div className="flex justify-between">
          <div
            id="shared-poll-preview-desktop"
            style={{height: '435px', width: '775px', margin: '12px'}}
          />
          <div
            id="shared-poll-preview-mobile"
            style={{height: '435px', width: '435px', margin: '12px'}}
          />
        </div>              
      </div>
      {loading && (
        <div className="fixed inset-0 z-30">
          Loading...
        </div>
      )}      
    </>
  );
};

export default Home;
