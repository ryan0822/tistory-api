import Tistory from '../index';

const params = {
  access_token: '', // put tistory's access token.
  output: 'json'
};

const tistory = new Tistory(params);

tistory.blog.info().then(res => {
  console.log(res);
  return res.item.blogs[0].name;
}).catch(err => {
  console.log(err);
}).then(blogName => tistory.post.list({
  blogName,
  page: 1,
  count: 10,
  categoryId: 0,
  sort: 'id'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
}));
