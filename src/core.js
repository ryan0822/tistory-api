// @flow
import request from 'request';
import fs from 'fs';
import { REQUIRED, MULTIPART, BASE_URL } from './constants';
import Api from './api';

const create = (key, define, p) => (
  (params = {}) => {
    const mergedParams = Object.assign({}, p, params);
    let isMultipart = false;
    Object.keys(define.paramTypes).forEach((paramName) => {
      const required = REQUIRED & define.paramTypes[paramName];
      if (required && !Object.prototype.hasOwnProperty.call(mergedParams, paramName)) {
        throw new Error(`check params!! ${paramName}`);
      }

      if (MULTIPART & define.paramTypes[paramName]) {
        if (fs.existsSync(mergedParams[paramName])) {
          mergedParams[paramName] = fs.createReadStream(mergedParams[paramName]);
          isMultipart = true;
        } else {
          throw new Error(`file not exist!! ${mergedParams[paramName]}`);
        }
      }
    });

    return new Promise((resolve, reject) => {
      const opt:{[key: string]: any } = {
        method: define.method || 'POST',
        url: `${BASE_URL}/${key.replace(/\./g, '/')}`
      };
      if (isMultipart) {
        opt.formData = mergedParams;
      } else {
        opt.form = mergedParams;
      }

      request(opt, (err, res, body) => {
        if (err) {
          reject(err);
        } else if (res.statusCode !== 200) {
          let msg = res.statusCode;
          if (body) {
            msg = `[${res.statusCode}] ${JSON.parse(body).tistory.error_message}`;
          }
          reject(new Error(msg));
        } else {
          resolve(JSON.parse(body).tistory);
        }
      });
    });
  }
);

export default class Tistory extends Object {
  constructor(params:{ [path: string]: any } = {}) {
    super();
    Object.keys(Api).forEach(key => {
      key.split('.').reduce((p, c, i, a) => {
        const tmp = p;
        if (i !== a.length - 1) {
          if (!tmp[c]) tmp[c] = {};
        } else {
          tmp[c] = create(key, Api[key], params);
        }
        return tmp[c];
      }, this);
    });
  }
}
