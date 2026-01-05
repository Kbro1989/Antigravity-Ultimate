-- Migration number: 0002 	 2026-01-01T00:00:00.000Z
CREATE TABLE ai_usage (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    provider TEXT NOT NULL,
    model TEXT,
    tokens_in INTEGER DEFAULT 0,
    tokens_out INTEGER DEFAULT 0,
    timestamp INTEGER NOT NULL,
    cost_micro_usd INTEGER DEFAULT 0
);

CREATE INDEX idx_usage_user_timestamp ON ai_usage(user_id, timestamp);
CREATE INDEX idx_usage_provider_timestamp ON ai_usage(provider, timestamp);
