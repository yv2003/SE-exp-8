/**
 * Sample for Cylindrical Column series
 */
import * as React from 'react';
import { useEffect } from "react";
import { ChartComponent, ILoadedEventArgs, ColumnSeries, Category, DataLabel, Tooltip, ChartTheme, SeriesDirective, SeriesCollectionDirective, Inject } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';

export let data: Object[] = [
    { x: 'Bhargav', y: 8, tooltipMappingName: 'Bhargav' },
    { x: 'Sahil', y: 7, tooltipMappingName: 'Sahil' },
];

const CylindricalColumn = () => {

    const onChartLoad = (args: ILoadedEventArgs): void => {
        let chart: Element = document.getElementById('charts');
        chart.setAttribute('title', '');
    };

    const load = (args: ILoadedEventArgs): void => {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast') as ChartTheme;
    };
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <ChartComponent id='charts' style={{ textAlign: "center" }}
                    chartArea={{ border: { width: 0 } }}
                    title='Time Span'
                    primaryXAxis={{
                        valueType: 'Category',
                        interval: 1,
                        majorGridLines: { width: 0 },
                        labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
                        labelRotation: Browser.isDevice ? -45 : 0,
                        majorTickLines: { width: 0 },
                        minorTickLines: { width: 0 }
                    }}
                    primaryYAxis={{
                        title: 'Attentive Participants',
                        majorTickLines: { width: 0 },
                        lineStyle: { width: 0 },
                        maximum: 50,
                        interval: 10
                    }}
                    tooltip={{
                        enable: true,
                        header: "<b>${point.tooltip}</b>",
                        format: "Gold Medal: <b>${point.y}</b>"
                    }}
                    load={load.bind(this)}
                    loaded={onChartLoad.bind(this)}
                    width={Browser.isDevice ? '100%' : '75%'}>
                    <Inject services={[ColumnSeries, Category, DataLabel, Tooltip]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={data}
                            columnFacet='Cylinder'
                            type='Column'
                            xName='x'
                            yName='y'
                            width={2}
                            columnSpacing={0.1}
                            tooltipMappingName='tooltipMappingName'>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    )
}
export default CylindricalColumn;