
-- Migration 0001: Initial Schema
-- Tables for Sessions, AI Usage, Projects, Files, Audit Log

CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    quota_used REAL DEFAULT 0.0,
    metadata TEXT -- JSON
);

CREATE TABLE IF NOT EXISTS ai_usage (
    id TEXT PRIMARY KEY,
    session_id TEXT,
    user_id TEXT,
    model TEXT NOT NULL,
    provider TEXT NOT NULL,
    tokens_in INTEGER DEFAULT 0,
    tokens_out INTEGER DEFAULT 0,
    cost REAL DEFAULT 0.0,
    timestamp INTEGER NOT NULL,
    success BOOLEAN DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS audit_log (
    id TEXT PRIMARY KEY,
    event TEXT NOT NULL,
    action TEXT NOT NULL,
    user_id TEXT,
    data TEXT, -- JSON
    severity TEXT DEFAULT 'info',
    timestamp INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    owner_id TEXT NOT NULL,
    name TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL,
    files_count INTEGER DEFAULT 0
);

-- Indexing
CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_usage_date ON ai_usage(timestamp);
CREATE INDEX IF NOT EXISTS idx_audit_log_date ON audit_log(timestamp);
