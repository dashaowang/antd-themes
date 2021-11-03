import { FC } from 'react';
import { Table, PaginationProps, TableProps } from 'antd';
import { useState, useEffect } from 'react';
import styles from './index.module.less';

type pageProps = PaginationProps | undefined;

const XcTable: FC<TableProps<unknown>> = (props) => {
  const { columns, dataSource, pagination } = props;
  const [pageParams, setPageParams] = useState<pageProps>(undefined);
  useEffect(() => {
    if (pagination) {
      const params: PaginationProps = {
        pageSizeOptions: ['10', '20', '50', '100'],
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: (total: number) => `共 ${total} 条`,
        onChange: (page: number, size?: number) => {
          console.log('onChange===>', page, size);
        },
        onShowSizeChange(cur: number, size: number) {
          console.log('onShowSizeChange======>', size);
        },
      };
      if (typeof pagination === 'boolean') {
        setPageParams(params);
      } else {
        setPageParams({ ...params, ...pagination });
      }
    }
  }, [pagination]);

  return (
    <div className={styles['xc-table-warpper']}>
      <div className={styles['top-warpper']}>
        <div className={styles['table-box']}>
          {' '}
          <Table
            {...props}
            columns={columns}
            dataSource={dataSource}
            pagination={pageParams}
            size="small"
          />
        </div>
        <div className={styles['right-box']}></div>
      </div>
      <div className={styles['bottom-warpper']}></div>
    </div>
  );
};

export default XcTable;
