import { mountThemedComponent, renderThemedComponent } from '@shared/tests/utils';
import * as React from 'react';
import { datasets, labels, singleDataset } from '../../test/resources/ChartProps';
import { BarChart } from './index';

describe('BarChart', () => {
  test('Renders with data', () => {
    renderThemedComponent(<BarChart labels={labels} datasets={singleDataset} />);
  });

  test('custom colors', () => {
    renderThemedComponent(<BarChart labels={labels} datasets={singleDataset} colors={['#f0ab00']} />);
  });

  test('valueAxisFormatter', () => {
    renderThemedComponent(<BarChart labels={labels} datasets={singleDataset} valueAxisFormatter={(d) => `${d}%`} />);
  });

  test('with Ref', () => {
    const ref = React.createRef();
    mountThemedComponent(<BarChart ref={ref} labels={labels} datasets={singleDataset} />);
    expect(ref.current.hasOwnProperty('chartInstance')).toBe(true);
  });

  test('stacked', () => {
    renderThemedComponent(
      <BarChart
        labels={labels}
        datasets={datasets}
        options={{ scales: { yAxes: [{ stacked: true }], xAxes: [{ stacked: true }] } }}
      />
    );
  });
});
