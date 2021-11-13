import { ChangeEvent, useEffect, useState } from 'react';
import { Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';

interface IProps {
  filterOptions?: IOtions[];
}
interface IOtions {
  label: string;
  value: string;
  checked: boolean;
  relationKey?: string;
}

export default function FilterList({ filterOptions }: IProps) {
  const [options, setOptions] = useState<IOtions[]>(
    filterOptions || [
      {
        label: '연재 중',
        value: '01',
        checked: true,
        relationKey: '01',
      },
      {
        label: '완결',
        value: '02',
        checked: false,
        relationKey: '01',
      },
      {
        label: '무료회차 3개 이상',
        value: '03',
        checked: true,
      },
    ]
  );

  const handleChange = function (payload: IOtions): void {
    const { value, checked, relationKey } = payload;

    setOptions(
      options.map((op) => {
        if (op.value === value) {
          return {
            ...op,
            checked: !checked,
          };
          // if (
          //   relationKey &&
          //   options.filter(
          //     (item) =>
          //       item.relationKey === relationKey &&
          //       item.checked &&
          //       item.value !== value
          //   ).length > 0
          // ) {
          //   alert('연관 목록이 선택되어 있습니다.');
          // } else {
          //   return {
          //     ...op,
          //     checked: !checked,
          //   };
          // }
        }

        return op;
      })
    );
  };

  const isDisabled = function (payload: IOtions): boolean {
    const { value, checked, relationKey } = payload;

    if (
      !checked &&
      options.filter((op) => op.relationKey === relationKey && op.checked)
        .length > 0
    ) {
      return true;
    }

    return false;
  };

  return (
    <ColBox>
      {options.map((item) => {
        return (
          <span className="col" key={item.value}>
            <Checkbox
              label={item.label}
              checked={item.checked}
              disabled={isDisabled(item)}
              onChange={() => handleChange(item)}
            />
          </span>
        );
      })}
    </ColBox>
  );
}

const ColBox = styled.div`
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  .col {
    display: inline-block;
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
`;
