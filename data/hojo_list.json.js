const hojoJson = [
    {
        "name": "攻:パワーUP Ⅱ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のATKを大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "ATK↑", "大"]
        ]
    },
    {
        "name": "攻:Sp.パワーUP Ⅱ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のSp.ATKを大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "攻:ガードDOWN Ⅱ",
        "effect_detail": "攻撃時、一定確率で敵のDEFを大ダウンさせる。",
        "tag": [
            ["攻撃時", "DEF↓", "大"]
        ]
    },
    {
        "name": "攻:パワーDOWN Ⅱ",
        "effect_detail": "攻撃時、一定確率で敵のATKを大ダウンさせる。",
        "tag": [
            ["攻撃時", "ATK↓", "大"]
        ]
    },
    {
        "name": "攻:Sp.パワーDOWN Ⅱ",
        "effect_detail": "攻撃時、一定確率で敵のSp.ATKを大ダウンさせる。",
        "tag": [
            ["攻撃時", "Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "攻:ガードUP Ⅱ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のDEFを大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "DEF↑", "大"]
        ]
    },
    {
        "name": "攻:Sp.ガードUP Ⅱ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のSp.DEFを大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "攻:Sp.ガードDOWN Ⅱ",
        "effect_detail": "攻撃時、一定確率で敵のSp.DEFを大ダウンさせる。",
        "tag": [
            ["攻撃時", "Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "援:Sp.ガードUP Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のSp.DEFを大アップさせる。",
        "tag": [
            ["支援/妨害時", "Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "回:ガードUP Ⅱ",
        "effect_detail": "HP回復時、一定確率で味方前衛1体のDEFを大アップさせる。",
        "tag": [
            ["HP回復時", "DEF↑", "大"]
        ]
    },
    {
        "name": "援:ガードDOWN Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のDEFを大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "DEF↓", "大"]
        ]
    },
    {
        "name": "援:Sp.パワーUP Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のSp.ATKを大アップさせる。",
        "tag": [
            ["支援/妨害時", "Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "回:Sp.ガードUP Ⅱ",
        "effect_detail": "HP回復時、一定確率で味方前衛1体のSp.DEFを大アップさせる。",
        "tag": [
            ["HP回復時", "Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "援:パワーUP Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のATKを大アップさせる。",
        "tag": [
            ["支援/妨害時", "ATK↑", "大"]
        ]
    },
    {
        "name": "援:Sp.パワーDOWN Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のSp.ATKを大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "援:パワーDOWN Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のATKを大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "ATK↓", "大"]
        ]
    },
    {
        "name": "援:ガードUP Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のDEFを大アップさせる。",
        "tag": [
            ["支援/妨害時", "DEF↑", "大"]
        ]
    },
    {
        "name": "攻:ダメージUP Ⅰ",
        "effect_detail": "攻撃時、一定確率で攻撃ダメージをアップさせる。",
        "tag": [
            ["攻撃時", "攻撃ダメージ↑", "中"]
        ]
    },
    {
        "name": "援:支援UP Ⅰ",
        "effect_detail": "支援/妨害時、一定確率で支援/妨害効果をアップさせる。",
        "tag": [
            ["支援/妨害時", "支援/妨害効果↑", "中"]
        ]
    },
    {
        "name": "攻:ガードUP Ⅰ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のDEFをアップさせる。",
        "tag": [
            ["前衛から攻撃時", "DEF↑", "中"]
        ]
    },
    {
        "name": "回:回復UP Ⅰ",
        "effect_detail": "HP回復時、一定確率でHPの回復量をアップさせる。",
        "tag": [
            ["HP回復時", "回復量↑", "中"]
        ]
    },
    {
        "name": "攻:Sp.ガードDOWN Ⅰ",
        "effect_detail": "攻撃時、一定確率で敵のSp.DEFをダウンさせる。",
        "tag": [
            ["攻撃時", "Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "援:Sp.ガードDOWN Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のSp.DEFを大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "援:Sp.ガードDOWN Ⅰ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のSp.DEFをダウンさせる。",
        "tag": [
            ["支援/妨害時", "Sp.DEF↓", "中"]
        ]
    },
    {
        "name": "回:パワーUP Ⅱ",
        "effect_detail": "HP回復時、一定確率で味方前衛1体のATKを大アップさせる。",
        "tag": [
            ["HP回復時", "ATK↑", "大"]
        ]
    },
    {
        "name": "攻:ガードDOWN Ⅰ",
        "effect_detail": "攻撃時、一定確率で敵のDEFをダウンさせる。",
        "tag": [
            ["攻撃時", "DEF↓", "中"]
        ]
    },
    {
        "name": "回:Sp.パワーUP Ⅱ",
        "effect_detail": "HP回復時、一定確率で味方前衛1体のSp.ATKを大アップさせる。",
        "tag": [
            ["HP回復時", "Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "回:回復UP Ⅱ",
        "effect_detail": "HP回復時、一定確率でHPの回復量を大アップさせる。",
        "tag": [
            ["HP回復時", "回復量↑", "大"]
        ]
    },
    {
        "name": "援:支援UP Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で支援/妨害効果を大アップさせる。",
        "tag": [
            ["支援/妨害時", "支援/妨害効果↑", "大"]
        ]
    },
    {
        "name": "攻:ダメージUP Ⅱ",
        "effect_detail": "攻撃時、一定確率で攻撃ダメージを大アップさせる。",
        "tag": [
            ["攻撃時", "攻撃ダメージ↑", "大"]
        ]
    },
    {
        "name": "コ:MP消費DOWN Ⅱ",
        "effect_detail": "コマンド実行時、一定確率でMP消費を抑える。",
        "tag": [
            ["コマンド実行時", "MP消費↓", "中"]
        ]
    },
    {
        "name": "攻:マイトUP Ⅰ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のATKとDEFをアップさせる。",
        "tag": [
            ["前衛から攻撃時", "ATK↑", "中"],
            ["前衛から攻撃時", "DEF↑", "中"]
        ]
    },
    {
        "name": "攻:Sp.マイトUP Ⅰ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のSp.ATKとSp.DEFをアップさせる。",
        "tag": [
            ["前衛から攻撃時", "Sp.ATK↑", "中"],
            ["前衛から攻撃時", "Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "攻:パワーDOWN Ⅲ",
        "effect_detail": "攻撃時、一定確率で敵のATKを特大ダウンさせる。",
        "tag": [
            ["攻撃時", "ATK↓", "特大"]
        ]
    },
    {
        "name": "攻:ダメージUP Ⅲ",
        "effect_detail": "攻撃時、一定確率で攻撃ダメージを特大アップさせる。",
        "tag": [
            ["攻撃時", "攻撃ダメージ↑", "特大"]
        ]
    },
    {
        "name": "援:支援UP Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で支援/妨害効果を特大アップさせる。",
        "tag": [
            ["支援/妨害時", "支援/妨害効果↑", "特大"]
        ]
    },
    {
        "name": "攻:ガードDOWN Ⅲ",
        "effect_detail": "攻撃時、一定確率で敵のDEFを特大ダウンさせる。",
        "tag": [
            ["攻撃時", "DEF↓", "特大"]
        ]
    },
    {
        "name": "攻:Sp.パワーUP Ⅲ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のSp.ATKを特大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "Sp.ATK↑", "特大"]
        ]
    },
    {
        "name": "援:ガードUP Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のDEFを特大アップさせる。",
        "tag": [
            ["支援/妨害時", "DEF↑", "特大"]
        ]
    },
    {
        "name": "攻:ガードUP Ⅲ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のDEFを特大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "DEF↑", "特大"]
        ]
    },
    {
        "name": "回:Sp.ガードUP Ⅲ",
        "effect_detail": "HP回復時、一定確率で味方前衛1体のSp.DEFを特大アップさせる。",
        "tag": [
            ["HP回復時", "Sp.DEF↑", "特大"]
        ]
    },
    {
        "name": "回:WガードUP Ⅰ",
        "effect_detail": "HP回復時、一定確率で味方前衛1体のDEFとSp.DEFをアップさせる。",
        "tag": [
            ["HP回復時", "DEF↑", "中"],
            ["HP回復時", "Sp.DEF↑", "中"]
        ]
    },
    {
        "name": "攻:Sp.ガードDOWN Ⅲ",
        "effect_detail": "攻撃時、一定確率で敵のSp.DEFを特大ダウンさせる。",
        "tag": [
            ["攻撃時", "Sp.DEF↓", "特大"]
        ]
    },
    {
        "name": "攻:パワーUP Ⅲ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のATKを特大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "ATK↑", "特大"]
        ]
    },
    {
        "name": "回:回復UP Ⅲ",
        "effect_detail": "HP回復時、一定確率でHPの回復量を特大アップさせる。",
        "tag": [
            ["HP回復時", "回復量↑", "特大"]
        ]
    },
    {
        "name": "援:Sp.ガードUP Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のSp.DEFを特大アップさせる。",
        "tag": [
            ["支援/妨害時", "Sp.DEF↑", "特大"]
        ]
    },
    {
        "name": "援:Sp.パワーDOWN Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のSp.ATKを特大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "Sp.ATK↓", "特大"]
        ]
    },
    {
        "name": "援:パワーUP Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のATKを特大アップさせる。",
        "tag": [
            ["支援/妨害時", "ATK↑", "特大"]
        ]
    },
    {
        "name": "援:WパワーDOWN Ⅰ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のATKとSp.ATKをダウンさせる。",
        "tag": [
            ["支援/妨害時", "ATK↓", "中"],
            ["支援/妨害時", "Sp.ATK↓", "中"]
        ]
    },
    {
        "name": "援:WパワーDOWN Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のATKとSp.ATKを大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "ATK↓", "大"],
            ["支援/妨害時", "Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "攻:WパワーDOWN Ⅱ",
        "effect_detail": "攻撃時、一定確率で敵のATKとSp.ATKを大ダウンさせる。",
        "tag": [
            ["攻撃時", "ATK↓", "大"],
            ["攻撃時", "Sp.ATK↓", "大"]
        ]
    },
    {
        "name": "回:ガードUP Ⅲ",
        "effect_detail": "HP回復時、一定確率で味方前衛1体のDEFを特大アップさせる。",
        "tag": [
            ["HP回復時", "DEF↑", "特大"]
        ]
    },
    {
        "name": "援:Sp.パワーUP Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のSp.ATKを特大アップさせる。",
        "tag": [
            ["支援/妨害時", "Sp.ATK↑", "特大"]
        ]
    },
    {
        "name": "援:WガードUP Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のDEFとSp.DEFを大アップさせる。",
        "tag": [
            ["支援/妨害時", "DEF↑", "大"],
            ["支援/妨害時", "Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "回:回復UP/副援:支援UP Ⅰ",
        "effect_detail": "HP回復時、一定確率でHPの回復量をアップさせる。さらに、支援/妨害時、一定確率で支援/妨害時効果を小アップさせる。",
        "tag": [
            ["HP回復時", "回復量↑", "中"],
            ["支援/妨害時", "支援/妨害効果↑", "小"]
        ]
    },
    {
        "name": "回:回復UP/副援:支援UP Ⅱ",
        "effect_detail": "HP回復時、一定確率でHPの回復量を大アップさせる。さらに、支援/妨害時、一定確率で支援/妨害効果をアップさせる。",
        "tag": [
            ["HP回復時", "回復量↑", "大"],
            ["支援/妨害時", "支援/妨害効果↑", "中"]
        ]
    },
    {
        "name": "援:パワーDOWN Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のATKを特大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "ATK↓", "特大"]
        ]
    },
    {
        "name": "攻:Sp.マイトUP Ⅱ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のSp.ATKとSp.DEFを大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "Sp.ATK↑", "大"],
            ["前衛から攻撃時", "Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "援:Sp.マイトDOWN Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のSp.ATKとSp.DEFを大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "Sp.ATK↓", "大"],
            ["支援/妨害時", "Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "攻:ダメージUP/Sp.パワーUP Ⅲ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のSp.ATKを特大アップさせる。さらに、攻撃ダメージを特大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "Sp.ATK↑", "特大"],
            ["前衛から攻撃時", "攻撃ダメージ↑", "特大"]
        ]
    },
    {
        "name": "攻:マイトUP Ⅱ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のATKとDEFを大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "ATK↑", "大"],
            ["前衛から攻撃時", "DEF↑", "大"]
        ]
    },
    {
        "name": "攻:WガードUP Ⅱ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のDEFとSp.DEFを大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "DEF↑", "大"],
            ["前衛から攻撃時", "Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "援:ディファーDOWN Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のSp.ATKとDEFを大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "Sp.ATK↓", "大"],
            ["支援/妨害時", "DEF↓", "大"]
        ]
    },
    {
        "name": "援:Sp.マイトUP Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のSp.ATKとSp.DEFを大アップさせる。",
        "tag": [
            ["支援/妨害時", "Sp.ATK↑", "大"],
            ["支援/妨害時", "Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "援:ガードDOWN Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のDEFを特大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "DEF↓", "特大"]
        ]
    },
    {
        "name": "回:パワーUP Ⅲ",
        "effect_detail": "HP回復時、一定確率で味方前衛1体のATKを特大アップさせる。",
        "tag": [
            ["HP回復時", "ATK↑", "特大"]
        ]
    },
    {
        "name": "援:WパワーUP Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のATKとSp.ATKを大アップさせる。",
        "tag": [
            ["支援/妨害時", "ATK↑", "大"],
            ["支援/妨害時", "Sp.ATK↑", "大"]
        ]
    },
    {
        "name": "回:Sp.パワーUP Ⅲ",
        "effect_detail": "HP回復時、一定確率で味方前衛1体のSp.ATKを特大アップさせる。",
        "tag": [
            ["HP回復時", "Sp.ATK↑", "特大"]
        ]
    },
    {
        "name": "援:Sp.ガードDOWN Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のSp.DEFを特大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "Sp.DEF↓", "特大"]
        ]
    },
    {
        "name": "攻:Sp.マイトDOWN Ⅱ",
        "effect_detail": "攻撃時、一定確率で敵のSp.ATKとSp.DEFを大ダウンさせる。",
        "tag": [
            ["攻撃時", "Sp.ATK↓", "大"],
            ["攻撃時", "Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "回:WガードUP Ⅱ",
        "effect_detail": "HP回復時、一定確率で味方前衛1体のDEFとSp.DEFを大アップさせる。",
        "tag": [
            ["HP回復時", "DEF↑", "大"],
            ["HP回復時", "Sp.DEF↑", "大"]
        ]
    },
    {
        "name": "攻:Sp.ディファーDOWN Ⅱ",
        "effect_detail": "攻撃時、一定確率で敵のATKとSp.DEFを大ダウンさせる。",
        "tag": [
            ["攻撃時", "ATK↓", "大"],
            ["攻撃時", "Sp.DEF↓", "大"]
        ]
    },
    {
        "name": "攻:マイトDOWN Ⅱ",
        "effect_detail": "攻撃時、一定確率で敵のATKとDEFを大ダウンさせる。",
        "tag": [
            ["攻撃時", "ATK↓", "大"],
            ["攻撃時", "DEF↓", "大"]
        ]
    },
    {
        "name": "援:マイトUP Ⅱ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のATKとDEFを大アップさせる。",
        "tag": [
            ["支援/妨害時", "ATK↑", "大"],
            ["支援/妨害時", "DEF↑", "大"]
        ]
    },
    {
        "name": "攻:Sp.ガードUP Ⅲ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のSp.DEFを特大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "Sp.DEF↑", "特大"]
        ]
    },
    {
        "name": "援:支援UP/Sp.ガードUP Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のSp.DEFを特大アップさせる。さらに、支援/妨害効果を特大アップさせる。",
        "tag": [
            ["支援/妨害時", "Sp.DEF↑", "特大"],
            ["支援/妨害時", "支援/妨害効果↑", "特大"]
        ]
    },
    {
        "name": "援:支援UP/ガードDOWN Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のDEFを特大ダウンさせる。さらに、支援/妨害効果を特大アップさせる。",
        "tag": [
            ["支援/妨害時", "DEF↓", "特大"],
            ["支援/妨害時", "支援/妨害効果↑", "特大"]
        ]
    },
    {
        "name": "攻:ダメージUP/パワーUP Ⅲ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のATKを特大アップさせる。さらに、攻撃ダメージを特大アップさせる。",
        "tag": [
            ["前衛から攻撃時", "ATK↑", "特大"],
            ["前衛から攻撃時", "攻撃ダメージ↑", "特大"]
        ]
    },
    {
        "name": "援:WガードDOWN Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で敵前衛1体のDEFとSp.DEFを特大ダウンさせる。",
        "tag": [
            ["支援/妨害時", "DEF↓", "特大"],
            ["支援/妨害時", "Sp.DEF↓", "特大"]
        ]
    },
    {
        "name": "援:WガードUP Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のDEFとSp.DEFを特大アップ",
        "tag": [
            ["支援/妨害時", "DEF↑", "特大"],
            ["支援/妨害時", "Sp.DEF↑", "特大"]
        ]
    },
    {
        "name": "援:支援UP/パワーUP Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のATKを特大アップさせる。さらに、支援/妨害効果を特大アップさせる。",
        "tag": [
            ["支援/妨害時", "ATK↑", "特大"],
            ["支援/妨害時", "支援/妨害効果↑", "特大"]
        ]
    },
    {
        "name": "攻:獲得マッチPtUP/通常単体 Ⅱ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のマッチPtの獲得量がアップする。",
        "tag": [
            ["前衛から攻撃時", "マッチPt獲得量↑(通常単体)", "中"]
        ]
    },
    {
        "name": "攻:獲得マッチPtUP/特殊単体 Ⅱ",
        "effect_detail": "前衛から攻撃時、一定確率で自身のマッチPtの獲得量がアップする。",
        "tag": [
            ["前衛から攻撃時", "マッチPt獲得量↑(特殊単体)", "中"]
        ]
    },
    {
        "name": "攻:ダメージUP/ガードDOWN Ⅲ",
        "effect_detail": "攻撃時、一定確率で敵のDEFを特大ダウンさせる。さらに、攻撃ダメージを特大アップさせる。",
        "tag": [
            ["攻撃時", "DEF↓", "特大"],
            ["攻撃時", "攻撃ダメージ↑", "特大"]
        ]
    },
    {
        "name": "攻:ダメージUP/Sp.ガードDOWN Ⅲ",
        "effect_detail": "攻撃時、一定確率で敵のSp.DEFを特大ダウンさせる。さらに、攻撃ダメージを特大アップさせる。",
        "tag": [
            ["攻撃時", "Sp.DEF↓", "特大"],
            ["攻撃時", "攻撃ダメージ↑", "特大"]
        ]
    },
    {
        "name": "攻:Sp.パワーDOWN Ⅲ",
        "effect_detail": "攻撃時、一定確率で敵のSp.ATKを特大ダウンさせる。",
        "tag": [
            ["攻撃時", "Sp.ATK↓", "特大"]
        ]
    },
    {
        "name": "攻:ダメージUP Ⅳ",
        "effect_detail": "攻撃時、一定確率で攻撃ダメージを超特大アップさせる。",
        "tag": [
            ["攻撃時", "攻撃ダメージ↑", "超特大"]
        ]
    },
    {
        "name": "援:支援UP Ⅳ",
        "effect_detail": "支援/妨害時、一定確率で支援/妨害効果を超特大アップさせる。",
        "tag": [
            ["支援/妨害時", "支援/妨害効果↑", "超特大"]
        ]
    },
    {
        "name": "回:回復UP Ⅳ",
        "effect_detail": "HP回復時、一定確率でHPの回復量を超特大アップさせる。",
        "tag": [
            ["HP回復時", "回復量↑", "超特大"]
        ]
    },
    {
        "name": "攻:ダメージUP Ⅳ+",
        "effect_detail": "攻撃時、中確率で攻撃ダメージを超特大アップさせる。",
        "tag": [
            ["攻撃時", "攻撃ダメージ↑", "超特大"]
        ]
    },
    {
        "name": "援:支援UP Ⅳ+",
        "effect_detail": "支援/妨害時、中確率で支援/妨害効果を超特大アップさせる。",
        "tag": [
            ["支援/妨害時", "支援/妨害効果↑", "超特大"]
        ]
    },
    {
        "name": "回:回復UP Ⅳ+",
        "effect_detail": "HP回復時、中確率でHPの回復量を超特大アップさせる。",
        "tag": [
            ["HP回復時", "回復量↑", "超特大"]
        ]
    },
    {
        "name": "援:WパワーUP Ⅲ",
        "effect_detail": "支援/妨害時、一定確率で味方前衛1体のATKとSp.ATKを特大アップさせる。",
        "tag": [
            ["支援/妨害時", "ATK↑", "特大"],
            ["支援/妨害時", "Sp.ATK↑", "特大"]
        ]
    },
    {
        "name": "回:回復UP/副援:支援UP Ⅲ",
        "effect_detail": "HP回復時、一定確率でHPの回復量を特大アップさせる。さらに、支援/妨害時、一定確率で支援/妨害効果を大アップさせる。",
        "tag": [
            ["HP回復時", "回復量↑", "特大"],
            ["支援/妨害時", "支援/妨害効果↑", "大"]
        ]
    }
]