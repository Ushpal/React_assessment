"use client";
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

const ProductDistributionChart: React.FC = () => {
    const [chartData, setChartData] = useState<{ labels: string[]; values: number[] }>({ labels: [], values: [] });

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then((response) => response.json())
            .then((data) => {
                const labels = Object.keys(data);
                const values = Object.values(data) as number[]; 
                setChartData({ labels, values });
            })
            .catch((error) => {
                console.error('Error fetching product categories:', error);
            });
    }, []);

    return <Pie data={{ labels: chartData.labels, datasets: [{ data: chartData.values }] }} />;
};

export default ProductDistributionChart;