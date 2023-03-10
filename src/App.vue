<script setup>
import { ref } from 'vue'
import styles from 'figma-plugin-ds/dist/figma-plugin-ds.css'

const styleSelected = ref('Color')

const create = () => {
  const locationSelected = {
    changeLocation: [...document.querySelectorAll('input[name="changes-location"]')].find(
      (item) => item.checked
    ).value,
  };
  parent.postMessage({ pluginMessage: { type: 'apply-styles', color: styleSelected.value, text: styleSelected.value, locationSelected } }, '*')
}

const cancel = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
</script>

<template>
  <!-- Section title -->
  <div class="section-title">File(s) selection</div>

  <!-- Radio buttons -->
  <div class="radio change-location">
    <input id="change-1" class="radio__button" type="radio" name="changes-location" value="page" checked />
    <label for="change-1" class="radio__label change-location-label">Current page</label>
    <input id="change-2" class="radio__button" type="radio" name="changes-location" value="project" />
    <label for="change-2" class="radio__label change-location-label">Entire project</label>
  </div>

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
    <label for="text" title="Font-Family, Font-Style, Font-Size, Line-Height, Letter-Spacing, Text-Decoration, Case"
      class="radio__label">
      Text Style
    </label>
  </div>

  <div class="button-group">
    <button id="cancel" class="button button--secondary" @click="cancel">Cancel</button>
    <button id="create" class="button button--primary" @click="create">Sync {{ styleSelected }}</button>
  </div>

  <footer>
    <p id="version">1.5.0</p>
    <a href="https://www.buymeacoffee.com/maximedaraize" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor"
          d="M7 22h10a1 1 0 0 0 .99-.858L19.867 8H21V6h-1.382l-1.724-3.447A.998.998 0 0 0 17 2H7c-.379 0-.725.214-.895.553L4.382 6H3v2h1.133L6.01 21.142A1 1 0 0 0 7 22zm10.418-11H6.582l-.429-3h11.693l-.428 3zm-9.551 9l-.429-3h9.123l-.429 3H7.867zM7.618 4h8.764l1 2H6.618l1-2z" />
      </svg>
    </a>
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
  column-gap: 8px;
  padding: 16px;
  justify-content: flex-end;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 8px 16px;
  border-top: 1px solid #ebebeb;
}

svg {
  color: rgb(200, 208, 220);
  transition: color 0.2s ease;
}

svg:hover {
  color: var(--black8-opaque);
  cursor: pointer;
}
</style>
