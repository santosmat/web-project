export const getBookByTitle = async (title) => {
  const url = `/api/getBook/${title}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

export const addBook = async (bookObj) => {
  const url = `/api/addBook`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(bookObj),
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export const deleteBookByTitle = async (title) => {
  const url = `/api/deleteBook/${title}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export const attBook = async (bookObj) => {
  const url = `/api/attBook/${bookObj.title}`;
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(bookObj),
  });
  const data = await response.json();
  console.log(data);
  return data;
}
