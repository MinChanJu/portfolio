import styles from '../assets/css/Table.module.css'

interface tableProps<T> {
  columnName: string[]; // 헤더 이름
  columnClass: string[]; // 헤더 스타일
  columnFunc?: (value: string, col: number) => React.ReactNode; // 헤더 이름 가공
  data: T[]; // 데이터 배열
  dataKey: string[]; // 데이터 키
  dataFunc?: { [K in keyof T]?: (value: T[K], row: number, col: number) => React.ReactNode }; // 데이터 가공
  onClick?: (item: T) => void; // 클릭 이벤트
  rowClass?: string[]; // 행 스타일
}

const Table = <T extends Object>({ columnName, columnClass, columnFunc, data, dataKey, dataFunc, onClick, rowClass }: tableProps<T>) => {

  return (
    <table className={styles.tableContainer}>
      <thead>
        <tr>
          {columnName.map((col, idx) => (
            <th key={idx} className={styles.tableHead + " small " + styles[columnClass[idx]]}>{columnFunc?.(col, idx) ? columnFunc(col, idx) : col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className='small' onClick={() => onClick?.(row)}>
            {dataKey.map((key, idx) => {
              if (key in row) {
                return (
                  <td key={idx} className={(onClick ? styles.cursor : '') + " " + (rowClass ? styles[rowClass[idx]] : '') + " " + styles.tableCell + " " + styles[columnClass[idx]]}>
                    {(() => {
                      const cellFunc = dataFunc?.[key as keyof T];
                      return cellFunc ? cellFunc(row[key as keyof T], rowIndex, idx) : (row[key as keyof T] as React.ReactNode);
                    })()}
                  </td>
                );
              } else if (key == "idx") {
                return (
                  <td key={idx} className={(onClick ? styles.cursor : '') + " " + styles.tableCell + " " + styles[columnClass[idx]]}>
                    {rowIndex+1}
                  </td>
                )
              }
              })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;