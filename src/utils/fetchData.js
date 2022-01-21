const baseURl = 'https://aviosapi.herokuapp.com';

export const getData = async (url) => {
  const res = await fetch(`${baseURl}/${url}`, {
    method: 'GET'
  });
  const data = await res.json();
  console.log(res.status);
  return data;
};

export const postData = async (url, body) => {
  const res = await fetch(`${baseURl}/${url}`, {
    method: 'POST',
    headers: {
      //  'Content-Type': 'multipart/form-data'
    },
    body: body
  });

  const data = await res.json();
  return data;
};

export const putData = async (url, body) => {
  const res = await fetch(`${baseURl}/${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  return data;
};

export const deleteData = async (url) => {
  const res = await fetch(`${baseURl}/${url}`, {
    method: 'DELETE'
  });

  const data = await res.json();
  return data;
};
