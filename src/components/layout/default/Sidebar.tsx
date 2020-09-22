import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar flex-shrink-0 w-64 bg-purple-800">
      <a href="#">
        <div className="flex items-center h-16 px-4 bg-purple-900 text-xl text-white font-medium">
          <div className="ml-2">
            <span className="font-light">Athena/</span>
            <span className="p-0 m-0 font-bold">Dashboard</span>
          </div>
        </div>
        <div className="px-6 py-6 border-t border-gray-700">
          <h4 className="text-sm text-purple-400 uppercase font-bold tracking-widest">
            Dashboard
          </h4>
          <ul className="mt-3 text-white">
            <li className="mt-3">
              <Link className="text-white" to="/">
                Main
              </Link>
            </li>
            <li className="mt-3">
              <Link className="text-white" to="/queries">
                Queries
              </Link>
            </li>
            <li className="mt-3">
              <Link className="text-white" to="/sql_queries">
                SQL Queries
              </Link>
            </li>
            <li className="mt-3">
              <Link className="text-white" to="/controllers">
                Controllers
              </Link>
            </li>
            <li className="mt-3">
              <Link className="text-white" to="/sidekiq_workers">
                Sidekiq Workers
              </Link>
            </li>
            <li className="mt-3">
              <Link className="text-white" to="/stacktraces">
                Stacktraces
              </Link>
            </li>
            <li className="mt-3">
              <Link className="text-white" to="#">
                MongoDB Indexes
                <span className="text-xs font-bold bg-purple-900 py-1 px-1 ml-2 rounded text-white align-middle">
                  soon
                </span>
              </Link>
            </li>
          </ul>
          <h4 className="text-sm text-purple-400 uppercase font-bold tracking-widest">
            Server Stats
            <span className="text-xs font-bold bg-purple-900 py-1 px-1 ml-2 rounded text-white align-middle">
              Soon
            </span>
          </h4>
          <ul className="mt-3 text-white">
            <li className="mt-3">MongoDB</li>
            <li className="mt-3">PostgreSQL</li>
          </ul>
          <h4 className="text-sm text-purple-400 uppercase font-bold tracking-widest">
            Performance
            <span className="text-xs font-bold bg-purple-900 py-1 px-1 ml-2 rounded text-white align-middle">
              Soon
            </span>
          </h4>
          <ul className="mt-3 text-white">
            <li className="mt-3">Missing Indexes</li>
            <li className="mt-3">Suggested Indexes</li>
          </ul>
        </div>
      </a>
    </div>
  );
}
