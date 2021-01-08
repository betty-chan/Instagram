// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportFriend from '../../../app/controller/friend';
import ExportHandle from '../../../app/controller/handle';
import ExportLogin from '../../../app/controller/login';
import ExportTopic from '../../../app/controller/topic';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    friend: ExportFriend;
    handle: ExportHandle;
    login: ExportLogin;
    topic: ExportTopic;
    user: ExportUser;
  }
}
