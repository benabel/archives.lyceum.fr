import React from 'react'

import {
  FaCreativeCommons,
  FaCreativeCommonsBy,
  FaCreativeCommonsSa,
} from 'react-icons/fa'

export default () => (
  <div className="row footer">
    <div className="text-center col">
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr"
        title="par Benjamin Abel [Attribution - Partage dans les Mêmes Conditions 4.0 International (CC BY-SA 4.0)]"
      >
        <FaCreativeCommons size="2em" />
        <FaCreativeCommonsBy size="2em" />
        <FaCreativeCommonsSa size="2em" />
      </a>
    </div>
  </div>
)
