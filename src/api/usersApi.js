import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();


export function getUsers(){
  return getUsers('users');
}

export function deleteUsers(){
  return del(`users\${id}`);
}

function get(url){
  return fetch(baseUrl + url).then(onSucess, onError);
}

//can't call fun delete since reserved word.
function del(url){
  const request = new Request (baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error){
  console.log(error); //eslint-disable-line no-console
}
