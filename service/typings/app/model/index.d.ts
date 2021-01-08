// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDiscuss from '../../../app/model/discuss';
import ExportFollow from '../../../app/model/follow';
import ExportTopicLike from '../../../app/model/topic-like';
import ExportTopic from '../../../app/model/topic';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Discuss: ReturnType<typeof ExportDiscuss>;
    Follow: ReturnType<typeof ExportFollow>;
    TopicLike: ReturnType<typeof ExportTopicLike>;
    Topic: ReturnType<typeof ExportTopic>;
    User: ReturnType<typeof ExportUser>;
  }
}
