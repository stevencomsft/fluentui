import * as React from 'react';
import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import { PresenceBadgeStatus, Avatar, useScrollbarWidth, useFluent } from '@fluentui/react-components';
import {
  DataGridRow,
  DataGrid,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridCell,
  TableColumnDefinition,
  TableRowData,
  createTableColumn,
  TableCellLayout,
} from '@fluentui/react-components/unstable';
import { DataGridBody } from '@fluentui/react-data-grid-react-window';

type FileCell = {
  label: string;
  icon: JSX.Element;
};

type LastUpdatedCell = {
  label: string;
  timestamp: number;
};

type LastUpdateCell = {
  label: string;
  icon: JSX.Element;
};

type AuthorCell = {
  label: string;
  status: PresenceBadgeStatus;
};

type Item = {
  index: number;
  file: FileCell;
  author: AuthorCell;
  lastUpdated: LastUpdatedCell;
  lastUpdate: LastUpdateCell;
};

export const Virtualization = () => {
  const { targetDocument } = useFluent();
  const scrollbarWidth = useScrollbarWidth({ targetDocument });
  const columns: TableColumnDefinition<Item>[] = React.useMemo(
    () => [
      createTableColumn<Item>({
        columnId: 'file',
        compare: (a, b) => {
          return a.file.label.localeCompare(b.file.label);
        },
        renderHeaderCell: () => {
          return 'File';
        },
        renderCell: item => {
          return (
            <TableCellLayout media={item.file.icon}>
              <strong>[{item.index}] </strong>
              {item.file.label}
            </TableCellLayout>
          );
        },
      }),
      createTableColumn<Item>({
        columnId: 'author',
        compare: (a, b) => {
          return a.author.label.localeCompare(b.author.label);
        },
        renderHeaderCell: () => {
          return 'Author';
        },
        renderCell: item => {
          return (
            <TableCellLayout media={<Avatar badge={{ status: item.author.status }} />}>
              {item.author.label}
            </TableCellLayout>
          );
        },
      }),
      createTableColumn<Item>({
        columnId: 'lastUpdated',
        compare: (a, b) => {
          return a.lastUpdated.timestamp - b.lastUpdated.timestamp;
        },
        renderHeaderCell: () => {
          return 'Last updated';
        },

        renderCell: item => {
          return item.lastUpdated.label;
        },
      }),
      createTableColumn<Item>({
        columnId: 'lastUpdate',
        compare: (a, b) => {
          return a.lastUpdate.label.localeCompare(b.lastUpdate.label);
        },
        renderHeaderCell: () => {
          return 'Last update';
        },
        renderCell: item => {
          return <TableCellLayout media={item.lastUpdate.icon}>{item.lastUpdate.label}</TableCellLayout>;
        },
      }),
    ],
    [],
  );

  const items = React.useMemo(() => {
    const baseItems = [
      {
        file: { label: 'Meeting notes', icon: <DocumentRegular /> },
        author: { label: 'Max Mustermann', status: 'available' },
        lastUpdated: { label: '7h ago', timestamp: 1 },
        lastUpdate: {
          label: 'You edited this',
          icon: <EditRegular />,
        },
      },
      {
        file: { label: 'Thursday presentation', icon: <FolderRegular /> },
        author: { label: 'Erika Mustermann', status: 'busy' },
        lastUpdated: { label: 'Yesterday at 1:45 PM', timestamp: 2 },
        lastUpdate: {
          label: 'You recently opened this',
          icon: <OpenRegular />,
        },
      },
      {
        file: { label: 'Training recording', icon: <VideoRegular /> },
        author: { label: 'John Doe', status: 'away' },
        lastUpdated: { label: 'Yesterday at 1:45 PM', timestamp: 2 },
        lastUpdate: {
          label: 'You recently opened this',
          icon: <OpenRegular />,
        },
      },
      {
        file: { label: 'Purchase order', icon: <DocumentPdfRegular /> },
        author: { label: 'Jane Doe', status: 'offline' },
        lastUpdated: { label: 'Tue at 9:30 AM', timestamp: 3 },
        lastUpdate: {
          label: 'You shared this in a Teams chat',
          icon: <PeopleRegular />,
        },
      },
    ];

    return new Array(1500).fill(0).map((_, i) => ({ ...baseItems[i % baseItems.length], index: i }));
  }, []);

  return (
    <DataGrid items={items} columns={columns} focusMode="cell" sortable selectionMode="multiselect">
      <DataGridHeader style={{ paddingRight: scrollbarWidth }}>
        <DataGridRow>
          {({ renderHeaderCell }: TableColumnDefinition<Item>) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody itemSize={50} height={400}>
        {({ item, rowId }: TableRowData<Item>, style) => (
          <DataGridRow key={rowId} style={style}>
            {({ renderCell }: TableColumnDefinition<Item>) => <DataGridCell>{renderCell(item)}</DataGridCell>}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};
