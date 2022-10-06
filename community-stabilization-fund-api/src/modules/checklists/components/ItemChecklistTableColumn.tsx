import { UnorderedList, ListItem } from "carbon-components-react";

import styles from '../styles/checklists.module.css';

export interface ItemChecklistTableColumnProps {
    items: string[],
    isFirstIndex?: boolean;
    thead: string;
};

const ItemChecklistTableColumn = ({items, isFirstIndex = true, thead}: ItemChecklistTableColumnProps) => (
  <div className={styles.table_info} style={!isFirstIndex ? {borderLeft: "medium none"} : {}}>
    <div className={styles.table_info__thead}>{thead}</div>
    <UnorderedList nested>
      {items.map((item, id) => <ListItem key={item + id}>{item}</ListItem>)}
    </UnorderedList>
  </div>
);

export { ItemChecklistTableColumn };