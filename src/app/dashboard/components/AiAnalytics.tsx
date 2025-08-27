"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { AlertTriangle, Bug, CheckCircle, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function AnalyticsDashboard() {
  // Simulated backend data (replace with API fetch later)
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Simulate backend API
    setTimeout(() => {
      setData({
        file: {
          name: "Project_Report_Q3_2024.pdf",
          type: "PDF Document",
          modified: "2024-07-05 10:30 AM",
          size: "12.5 MB",
        },
        summary:
          "This document appears to be a comprehensive quarterly project report for Q3 2024, detailing project progress, key achievements, challenges, and future outlook. It likely contains financial data, team performance metrics, and strategic recommendations.",
        usage: [
          { month: "Jan", views: 60, downloads: 25 },
          { month: "Feb", views: 50, downloads: 35 },
          { month: "Mar", views: 80, downloads: 40 },
          { month: "Apr", views: 75, downloads: 20 },
          { month: "May", views: 85, downloads: 45 },
          { month: "Jun", views: 55, downloads: 25 },
          { month: "Jul", views: 90, downloads: 30 },
        ],
        storage: [
          { name: "Documents", value: 45 },
          { name: "Images", value: 25 },
          { name: "Videos", value: 15 },
          { name: "Archives", value: 10 },
          { name: "Spreadsheets", value: 5 },
        ],
        sentiment: { positive: 75, neutral: 15, negative: 10 },
        keyPhrases: [
          "Project Milestones",
          "Market Expansion",
          "Revenue Growth",
          "Team Performance",
          "Risk Assessment",
          "Strategic Objectives",
        ],
      });
    }, 500);
  }, []);

  if (!data) return <p className="p-10 text-lg">Loading dashboard...</p>;

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F"];

  return (
    <div className="p-6 space-y-6 text-black bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold">AI Analytics Dashboard</h1>

      {/* File Summary */}
      <Card>
        <CardHeader>
          <CardTitle>File Summary</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-between">
          <p><b>File Name:</b> {data.file.name}</p>
          <p><b>File Type:</b> {data.file.type}</p>
          <p><b>Last Modified:</b> {data.file.modified}</p>
          <p><b>Size:</b> {data.file.size}</p>
        </CardContent>
      </Card>

      {/* Summary & Usage */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI-Generated Summary</CardTitle>
          </CardHeader>
          <CardContent>{data.summary}</CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data.usage}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#8884d8" name="File Views" />
                <Bar dataKey="downloads" fill="#82ca9d" name="File Downloads" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Storage & Security */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Storage Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={data.storage}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {data.storage.map((_: unknown, i: number) => (
  <div key={i}>{i}</div>
))}

                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security & Privacy Scan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="flex items-center gap-2 text-green-600"><Shield size={16}/> Encrypted (AES-256)</p>
            <p className="flex items-center gap-2 text-red-500"><AlertTriangle size={16}/> Public Link Active</p>
            <p className="flex items-center gap-2 text-blue-600"><CheckCircle size={16}/> No Threats Detected</p>
          </CardContent>
        </Card>
      </div>

      {/* Sentiment & Key Phrases */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p><b>Overall Sentiment:</b> Positive</p>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div className="bg-green-500 h-3 rounded-full" style={{width: `${data.sentiment.positive}%`}}></div>
            </div>
            <p className="text-sm mt-2">Positive {data.sentiment.positive}% | Neutral {data.sentiment.neutral}% | Negative {data.sentiment.negative}%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Phrase Extraction</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {data.keyPhrases.map((p: string, i: number) => (
              <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                {p}
              </span>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Content Anomaly & Categorization */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Anomaly Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-500"><Bug size={16} className="inline"/> Unusual Access Pattern Detected</p>
            <p className="text-yellow-600">⚠ High Edit Frequency</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Automated Categorization</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {["Business Reports", "Project Management", "Financial Documents"].map((c, i) => (
              <span key={i} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                {c}
              </span>
            ))}
            <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-lg">Confirm Categories</button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
