import {RootState} from '../store';

export const getListReportAdm = (state: RootState) =>
  state.report.listReportAdm?.data;
export const getTotalAdmCreact = (state: RootState) =>
  state.report.listReportAdm?.totalPage;

export const getListAccptReportAdm = (state: RootState) =>
  state.report.listAccptReportAdm?.data;
export const getTotalAdmAccpt = (state: RootState) =>
  state.report.listAccptReportAdm?.totalPage;
