# Tistory API for node.js

**Tistory API**는 nodejs 환경에서 티스토리 블로그 API를 쉽게 사용할 수 있도록 제공합니다.

## Installation

```bash
npm install tistory-api
```

## Usage

```javascript
import Tistory from 'tistory-api';
const params = {
	access_token: 'abc...XYZ', // put tistory's access token.
	output: 'json'
};
const tistory = new Tistory(params);

// get user's blogs
tistory.blog.info().then(res => {
	// handle the blog information here
}).catch(err => {
	// handle the exception here
	console.log(err);
});

// get posts list from A blog
tistory.post.list({
	// required
	blogName: 'A',
	// optional
	page: 1,
	// optional
	count: 10,
	// optional
	categoryId: 0,
	// optional
	sort: 'id'
}).then(res => {
	// handle the post list here
}).catch(err => {
	// handle the exception here
	console.log(err);
});

```

## Features

모든 `API`에 대한 정의는 [`src/api.js`](./src/api.js) 파일을 참고 하면 됩니다. 그리고 모든 메소드는 `Promise` 객체를 반환하게 됩니다.

> API 응답을 포함한 더 자세한 사항은 공식 Tistory API에서 확인하세요.  
> [http://www.tistory.com/guide/api/index](http://www.tistory.com/guide/api/index)

## Build
```bash
npm run build
```

## Test
```bash
npm run test
```

## License
[Apache-2.0](https://opensource.org/licenses/Apache-2.0)  
Copyright (c) 2016, Ryan Yoon
