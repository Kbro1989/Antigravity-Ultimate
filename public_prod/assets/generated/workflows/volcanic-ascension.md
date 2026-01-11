---
description: The Volcanic Ascension - Mega-Boss Pipeline
id: volcanic-ascension-v1
---

## 🏛️ Step 1: Archaeological Ingestion
action: relic_fetch_relic_content
id: RS204_NPC_BOSS_BASE
type: npc
provenance: RSC_LEGACY_EXCAVATION

## 🎨 Step 2: Innovation Layer - Concept Gen
// turbo
action: image_generate
prompt: "Volcanic Elder Boss, flowing magma skin, obsidian armor, RuneScape Classic aesthetic, 4k concept art"
negativePrompt: "low detail, modern 3d, unrealistic"

## 🏗️ Step 3: Mesh Knight - 3D Sculpt
// turbo
action: mesh_generate_cube
width: 4
height: 10
depth: 4
operation: sculpt_boss_base

## 🔥 Step 4: Material Synthesis - Magma PBR
// turbo
action: material_pbr
prompt: "Flowing magma with obsidian cracks, emissive glowing cracks"
metallic: 0.1
roughness: 0.8

## 🎞️ Step 5: Animation Retargeting
// turbo
action: animation_retarget_motion
targetRig: humanoid_v2
motion: boss_spawn_ascension

## 🌍 Step 6: World Injection
action: world_patch
coordinates: [3200, 3200, 0]
entityId: volcanic_elder_boss_v1
autoFork: true

## 🛡️ Step 7: Reality Anchor
action: reality_anchor_convergence
reference: volcanic-ascension-v1
provenanceType: INTENT
