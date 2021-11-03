import { FC } from 'react';
import styles from './index.less';
import 'antd/dist/antd.variable.min.css';
import { ConfigProvider, Input } from 'antd';
import XcTable from '@/components/XcTable';

//  换肤
ConfigProvider.config({
  theme: {
    primaryColor: 'red',
    'table-border-color': 'green',
  },
});

const NewsAndAnnounces: FC = () => {
  const datas = [
    {
      index: '1',
      val1: '33333234',
      val2: '23423432',
    },
  ];
  const columns = [
    {
      title: '序号',
      children: [
        {
          dataIndex: 'index',
          width: 200,
          title: () => {
            return <Input />;
          },
        },
      ],
    },
    {
      title: 'test1',
      dataIndex: 'val1',
    },
    {
      title: 'test2',
      dataIndex: 'val2',
    },
  ];
  return (
    <XcTable dataSource={datas} columns={columns} bordered rowkey="index" />
  );
};

const IndexPage: FC = () => {
  return (
    <ConfigProvider componentSize="small">
      <div className={styles['index-page-box']}>
        <NewsAndAnnounces />
      </div>
    </ConfigProvider>
  );
};

export default IndexPage;
