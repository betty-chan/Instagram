// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportFollow from '../../../app/service/follow';
import ExportQiniu from '../../../app/service/qiniu';
import ExportTopic from '../../../app/service/topic';
import ExportUser from '../../../app/service/user';
import ExportTypeFollowInterface from '../../../app/service/type/follow-interface';
import ExportTypeTopicInterface from '../../../app/service/type/topic-interface';

declare module 'egg' {
  interface IService {
    follow: AutoInstanceType<typeof ExportFollow>;
    qiniu: AutoInstanceType<typeof ExportQiniu>;
    topic: AutoInstanceType<typeof ExportTopic>;
    user: AutoInstanceType<typeof ExportUser>;
    type: {
      followInterface: AutoInstanceType<typeof ExportTypeFollowInterface>;
      topicInterface: AutoInstanceType<typeof ExportTypeTopicInterface>;
    }
  }
}
