import { action } from '@storybook/addon-actions';
import { ColumnChart } from '@ui5/webcomponents-react-charts/lib/next/ColumnChart';
import React from 'react';
import { complexDataSet, simpleDataSet } from '../../resources/DemoProps';

export default {
  title: 'Charts - Unstable /  ColumnChart',
  component: ColumnChart
};

export const defaultStory = () => (
  <ColumnChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    dataset={complexDataSet}
    width={'97%'}
    labelKey={'name'}
  />
);

defaultStory.story = {
  name: 'Default'
};

export const withCustomColor = () => (
  <ColumnChart
    onDataPointClick={action('onDataPointClick')}
    dataset={simpleDataSet}
    color={'red'}
    width={'95%'}
    height={'40vh'}
    chartConfig={{ dataLabel: true }}
  />
);

withCustomColor.story = {
  name: 'With custom color'
};

export const loadingPlaceholder = () => <ColumnChart labelKey={'xValue'} width={'30%'} />;

loadingPlaceholder.story = {
  name: 'Loading placeholder'
};

export const defaultStackedStory = () => (
  <ColumnChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    labelKey={'name'}
    dataset={complexDataSet}
    width={'97%'}
    chartConfig={{
      gridStroke: 'white',
      gridVertical: false,
      fillOpacity: 0.7,
      strokeOpacity: 1,
      barSize: 35,
      xAxisVisible: true,
      yAxisVisible: true,
      zoomingTool: true,
      stacked: true,
      dataLabel: true
    }}
  />
);

defaultStackedStory.story = {
  name: 'Stacked chart'
};

export const defaultFormatedStory = () => (
  <ColumnChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    labelKey={'name'}
    dataset={complexDataSet}
    width={'97%'}
    dataLabelFormatter={(d) => d / 100}
    xAxisFormatter={(el) => el.slice(0, 3)}
    yAxisFormatter={(el) => el / 100}
    chartConfig={{
      gridStroke: 'white',
      gridVertical: false,
      yAxisUnit: '/100',
      fillOpacity: 0.7,
      strokeOpacity: 1,
      barSize: 35,
      xAxisVisible: true,
      yAxisVisible: true,
      zoomingTool: true,
      stacked: true,
      dataLabel: true
    }}
  />
);

defaultFormatedStory.story = {
  name: 'With formatter'
};

export const defaultReferenceLineStory = () => (
  <ColumnChart
    onDataPointClick={action('onDataPointClick')}
    onLegendClick={action('onLegendClick')}
    labelKey={'name'}
    dataset={complexDataSet}
    width={'97%'}
    dataLabelFormatter={(d) => d / 100}
    chartConfig={{
      gridStroke: 'white',
      gridVertical: false,
      fillOpacity: 0.7,
      strokeOpacity: 1,
      barSize: 35,
      xAxisVisible: true,
      yAxisVisible: true,
      zoomingTool: true,
      stacked: true,
      dataLabel: true,
      referenceLine: {
        color: 'red',
        label: 'MAX',
        value: 1100
      }
    }}
  />
);

defaultReferenceLineStory.story = {
  name: 'With reference line'
};
