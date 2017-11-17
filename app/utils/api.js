function callToApi() {
  console.log('обработка зпроса...');
  const data = {
    items: [
        { id: 1, top: '30px', left: '40px', backgroundColor: '#f00' },
        { id: 2, top: '200px', left: '70px', backgroundColor: '#0f0' },
        { id: 3, top: '140px', left: '200px', backgroundColor: '#00f' },
        { id: 4, top: '30px', left: '300px', backgroundColor: '#ff0' },
        { id: 5, top: '70px', left: '400px', backgroundColor: '#0ff' },
    ],
  };

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
      reject();
      console.log('200 OK');
    }, 2000);
  });

  return promise;
}

export const getData = () => callToApi()
  .then((response) => response);
