<script setup>
import { ref } from 'vue'
import styles from 'figma-plugin-ds/dist/figma-plugin-ds.css'

const styleSelected = ref('Color')

const create = () => {
    parent.postMessage({ pluginMessage: { type: 'apply-styles', color: styleSelected.value, text: styleSelected.value } }, '*')
}

const cancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
</script>

<template>
    <!-- Section title -->
    <div class="section-title">Style Selection</div>

    <!-- Radio button -->
    <div class="radio">
        <input id="color" type="radio" class="radio__button" name="style" value="Color" v-model="styleSelected" checked />
        <label for="color" class="radio__label">Color Styles</label>
    </div>
    <!-- Radio button -->
    <div class="radio">
        <input id="text" type="radio" class="radio__button" name="style" value="Text" v-model="styleSelected" />
        <label for="text" title="Font-Family, Font-Style, Font-Size, Line-Height, Letter-Spacing, Text-Decoration, Case" class="radio__label">
            Text Style
        </label>
    </div>

    <div class="button-group">
        <button id="cancel" class="button button--secondary" @click="cancel">Cancel</button>
        <button id="create" class="button button--primary" @click="create">Sync {{ styleSelected }}</button>
    </div>

    <footer>
        <p id="version">v1.5.0</p>
        <a href="https://www.github.com/maximedaraize/style-sync" target="_blank" rel="noopener noreferrer"> Open a issue on Github</a>
    </footer>
</template>

<style>
* {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    text-decoration: none;
}

a {
    color: #18a0fb;
}

p {
    margin-bottom: 8px;
}

.flex {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}

.button-group {
    display: flex;
    align-items: center;
    margin-top: 32px;
    column-gap: 8px;
    padding: 8px;
    justify-content: flex-end;
    border-top: 1px solid #ebebeb;
}

footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 8px;
    border-top: 1px solid #ebebeb;
}
</style>
