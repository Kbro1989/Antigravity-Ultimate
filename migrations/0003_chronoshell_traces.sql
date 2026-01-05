-- Migration number: 0003 	 2026-01-01T01:00:00.000Z
CREATE TABLE chronoshell_traces (
    id TEXT PRIMARY KEY,
    timestamp INTEGER NOT NULL,
    layer TEXT NOT NULL,
    action TEXT NOT NULL,
    metadata TEXT, -- JSON stringified
    reasoning TEXT
);

CREATE INDEX idx_traces_timestamp ON chronoshell_traces(timestamp);
CREATE INDEX idx_traces_layer ON chronoshell_traces(layer);
