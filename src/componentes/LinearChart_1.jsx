import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const LinearChart_1 = ({ width = '100%', height = 400 }) => {
    const data = [
        { name: 'Jan', uv: 4000, pv: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398 },
        { name: 'Mar', uv: 2000, pv: 9800 },
        { name: 'Apr', uv: 2780, pv: 3908 },
        { name: 'May', uv: 1890, pv: 4800 },
        { name: 'Jun', uv: 2390, pv: 3800 },
        { name: 'Jul', uv: 3490, pv: 4300 },
    ];

    return (
        <ResponsiveContainer width={width} height={height}>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};
