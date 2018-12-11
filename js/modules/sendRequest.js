function sendRequest(data, onSuccess) {
  let xhr = new XMLHttpRequest;

  xhr.open('GET', data);

  xhr.send();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {

      const responseObj = JSON.parse(xhr.responseText);
      onSuccess(responseObj);

    } else {
      // console.log(xhr.responseText);
      console.log(`Жду загрузки: ${xhr.readyState}`);
    }
  }
}

export default sendRequest;
