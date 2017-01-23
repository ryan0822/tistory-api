// @flow
import { REQUIRED, OPTIONAL, MULTIPART } from './constants';

const defaultParamTypes = {
  access_token: REQUIRED,
  output: OPTIONAL
};

const makeParamType = (obj = {}) => Object.assign({}, defaultParamTypes, obj);

const Api:{
  [key: string]: {
    method: string,
    paramTypes: Object
  }
} = {

  'blog.info': {
    method: 'POST',
    paramTypes: makeParamType()
  },

  'category.list': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED
    })
  },

  'post.list': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      page: OPTIONAL,
      count: OPTIONAL,
      categoryId: OPTIONAL,
      sort: OPTIONAL
    })
  },

  'post.read': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      postId: REQUIRED
    })
  },

  'post.write': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      title: REQUIRED,
      visibility: OPTIONAL,
      published: OPTIONAL,
      category: OPTIONAL,
      content: OPTIONAL,
      slogan: OPTIONAL,
      tag: OPTIONAL
    })
  },

  'post.modify': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      title: REQUIRED,
      postId: REQUIRED,
      visibility: OPTIONAL,
      category: OPTIONAL,
      content: OPTIONAL,
      slogan: OPTIONAL,
      tag: OPTIONAL
    })
  },

  'post.attach': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      uploadedfile: REQUIRED | MULTIPART
    })
  },

  'post.delete': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      postId: REQUIRED
    })
  },

  'comment.list': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      postId: REQUIRED
    })
  },

  'comment.newest': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      postId: REQUIRED,
      page: OPTIONAL,
      count: OPTIONAL
    })
  },

  'comment.write': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      postId: REQUIRED,
      content: REQUIRED,
      parentId: OPTIONAL,
      secret: OPTIONAL
    })
  },

  'comment.modify': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      postId: REQUIRED,
      commentId: REQUIRED,
      content: REQUIRED,
      parentId: OPTIONAL,
      secret: OPTIONAL
    })
  },

  'comment.delete': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      postId: REQUIRED,
      commentId: REQUIRED
    })
  },

  'guestbook.list': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED
    })
  },

  'guestbook.write': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      content: REQUIRED,
      parentId: OPTIONAL,
      secret: OPTIONAL
    })
  },

  'guestbook.modify': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      guestbookId: REQUIRED,
      content: REQUIRED,
      parentId: OPTIONAL,
      secret: OPTIONAL
    })
  },

  'guestbook.delete': {
    method: 'POST',
    paramTypes: makeParamType({
      blogName: REQUIRED,
      guestbookId: REQUIRED
    })
  }
};

export default Api;
