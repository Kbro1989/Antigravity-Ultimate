-- Migration 0002: Game Data Schema
-- Ported from POG Engine (InstantDB)

-- Player Characters
CREATE TABLE IF NOT EXISTS characters (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    class TEXT NOT NULL,
    level INTEGER DEFAULT 1,
    experience INTEGER DEFAULT 0,
    health INTEGER DEFAULT 100,
    max_health INTEGER DEFAULT 100,
    mana INTEGER DEFAULT 50,
    max_mana INTEGER DEFAULT 50,
    current_location TEXT, -- ID of location
    is_online BOOLEAN DEFAULT FALSE,
    play_time INTEGER DEFAULT 0, -- Seconds
    created_at INTEGER NOT NULL,
    last_played_at INTEGER,
    game_source TEXT DEFAULT 'runescape' -- 'runescape', 'morrowind', 'godot'
);

-- Game Locations
CREATE TABLE IF NOT EXISTS locations (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL, -- 'town', 'dungeon', 'wilderness'
    difficulty INTEGER DEFAULT 1,
    min_level INTEGER DEFAULT 1,
    is_safe_zone BOOLEAN DEFAULT TRUE,
    pvp_enabled BOOLEAN DEFAULT FALSE,
    coordinates TEXT -- JSON {x,y,z}
);

-- Items
CREATE TABLE IF NOT EXISTS items (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL, -- 'weapon', 'armor', 'consumable'
    rarity TEXT DEFAULT 'common',
    value INTEGER DEFAULT 0,
    weight REAL DEFAULT 0.0,
    stats TEXT, -- JSON {attack, defense, etc}
    model_id TEXT -- Link to 3D model
);

-- Quests
CREATE TABLE IF NOT EXISTS quests (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL, -- 'main', 'side', 'daily'
    min_level INTEGER DEFAULT 1,
    difficulty INTEGER DEFAULT 1,
    is_repeatable BOOLEAN DEFAULT FALSE,
    ai_generated BOOLEAN DEFAULT FALSE,
    rewards TEXT -- JSON
);

-- AI World Events
CREATE TABLE IF NOT EXISTS world_events (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    category TEXT NOT NULL, -- 'code', 'media', '3d_model', 'text'
    title TEXT NOT NULL,
    description TEXT,
    source TEXT,
    created_at INTEGER NOT NULL,
    created_by TEXT, -- Agent or User ID
    is_public BOOLEAN DEFAULT TRUE,
    quality_score REAL,
    metadata TEXT -- JSON
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_characters_user ON characters(user_id);
CREATE INDEX IF NOT EXISTS idx_locations_type ON locations(type);
CREATE INDEX IF NOT EXISTS idx_items_type ON items(type);
CREATE INDEX IF NOT EXISTS idx_quests_type ON quests(type);
CREATE INDEX IF NOT EXISTS idx_events_date ON world_events(created_at);
