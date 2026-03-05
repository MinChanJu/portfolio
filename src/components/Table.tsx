type styleType = "num" | "date" | "period" | "class" | "description" | "";

interface tableProps<T> {
  columnName: string[]; // 헤더 이름
  columnClass: styleType[]; // 헤더 스타일
  columnFunc?: (value: string, col: number) => React.ReactNode; // 헤더 이름 가공
  data: T[]; // 데이터 배열
  dataKey: string[]; // 데이터 키
  dataFunc?: { [K in keyof T]?: (value: T[K], row: number, col: number) => React.ReactNode }; // 데이터 가공
  onClick?: (item: T) => void; // 클릭 이벤트
  rowClass?: styleType[]; // 행 스타일
}

const Table = <T extends object>({
  columnName,
  columnClass,
  columnFunc,
  data,
  dataKey,
  dataFunc,
  onClick,
  rowClass,
}: tableProps<T>) => {
  const styles: Record<styleType, string> = {
    num: "whitespace-pre-wrap text-center",
    date: "whitespace-pre-wrap text-center",
    period: "whitespace-pre-wrap text-center",
    class: "whitespace-pre-wrap text-center",
    description: "text-start",
    "": "",
  };

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {columnName.map((col, idx) => (
            <th
              key={idx}
              className={
                "border border-gray-300 bg-gray-100 px-1.5 py-2.5 text-base font-normal break-all " +
                styles[columnClass[idx]]
              }
            >
              {columnFunc?.(col, idx) ? columnFunc(col, idx) : col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="small" onClick={() => onClick?.(row)}>
            {dataKey.map((key, idx) => {
              if (key in row) {
                return (
                  <td
                    key={idx}
                    className={
                      (onClick ? "cursor-pointer" : "") +
                      " " +
                      (rowClass ? styles[rowClass[idx]] : "") +
                      " border border-gray-300 px-1.5 py-2.5 break-all " +
                      styles[columnClass[idx]]
                    }
                  >
                    {(() => {
                      const cellFunc = dataFunc?.[key as keyof T];
                      return cellFunc
                        ? cellFunc(row[key as keyof T], rowIndex, idx)
                        : (row[key as keyof T] as React.ReactNode);
                    })()}
                  </td>
                );
              } else if (key == "idx") {
                return (
                  <td
                    key={idx}
                    className={
                      (onClick ? "cursor-pointer" : "") +
                      " border border-gray-300 px-1.5 py-2.5 break-all " +
                      styles[columnClass[idx]]
                    }
                  >
                    {rowIndex + 1}
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
