## 💻 Exercise: Refactor a monolithic DropdownMenu into Compound Components

You are given a single dropdown that manages all its own state and rendering.

### Goals

Build a Dropdown provider that owns the shared state (isOpen, selection).

Create the following compound parts that read that shared context:

- DropdownTrigger – button (or any element) that toggles the menu
- DropdownMenu – wrapper that shows children when open
- DropdownItem – selectable option

Make the API flexible so designers can compose arbitrary layouts:

```jsx
<Dropdown onSelect={handleSelect}>
  <DropdownTrigger>Menu</DropdownTrigger>
  <DropdownMenu>
    <DropdownItem value="edit">Edit</DropdownItem>
    <DropdownItem value="duplicate">Duplicate</DropdownItem>
    <DropdownItem value="delete" className="text-red-600">
      Delete
    </DropdownItem>
  </DropdownMenu>
</Dropdown>
```

### Requirements

- Internal open/close state lives in context, not props drilling.
- Clicking an item calls onSelect(value) and closes the menu.
- Escape key or outside click also closes the menu (stretch goal).
