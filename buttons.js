import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

export const azukiButton = () => [
  new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("azuki")
      .setLabel("Azuki")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("blue")
      .setLabel("Blue Jacket")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("red")
      .setLabel("Red Jacket")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("wallpaper")
      .setLabel("Wallpaper")
      .setStyle(ButtonStyle.Primary)
  ),
];

export const beanzButton = () => [
  new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("beanz")
      .setLabel("Beanz")
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId("selfie")
      .setLabel("Selfie")
      .setStyle(ButtonStyle.Primary)
  ),
];

export const pairButton = () => [
  new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("pair")
      .setLabel("⟳")
      .setStyle(ButtonStyle.Primary)
  ),
];

export const villageButton = () => [
  new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId("reroll")
      .setLabel("Reroll")
      .setStyle(ButtonStyle.Primary)
  ),
]
