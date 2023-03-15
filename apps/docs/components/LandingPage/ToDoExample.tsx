import { Button, Menubar } from "@chimera-ui/components";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export const TodoExample = () => {
  return (
    <div className="w-full max-w-[500px] h-[400px] bg-base rounded-md shadow-md">
      <Menubar.Root className="rounded-b-none">
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>
              <p>
                New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
              </p>
            </Menubar.Item>
            <Menubar.Item>
              <p>
                New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
              </p>
            </Menubar.Item>
            <Menubar.Item disabled>New Incognito Window</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
              <Menubar.SubTrigger>Share</Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item>Email link</Menubar.Item>

                <Menubar.Item>Messages</Menubar.Item>

                <Menubar.Item>Notes</Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>
              <p>
                Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
              </p>
            </Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>
              <p>
                Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
              </p>
            </Menubar.Item>
            <Menubar.Item>
              <p>
                Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
              </p>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Sub>
              <Menubar.SubTrigger>Find</Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item>Search the web</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item>Find...</Menubar.Item>

                <Menubar.Item>Find Next</Menubar.Item>

                <Menubar.Item>Find Previous</Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>
            <Menubar.Separator />
            <Menubar.Item>Cut</Menubar.Item>

            <Menubar.Item>Copy</Menubar.Item>

            <Menubar.Item>Paste</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>View</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.CheckboxItem>
              Always Show Bookmarks Bar
            </Menubar.CheckboxItem>
            <Menubar.CheckboxItem checked>
              <p>Always Show Full URLs</p>
            </Menubar.CheckboxItem>
            <Menubar.Separator />
            <Menubar.Item inset>
              <p>
                Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
              </p>
            </Menubar.Item>
            <Menubar.Item disabled inset>
              <p>
                Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
              </p>
            </Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Hide Sidebar</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
        <Menubar.Menu>
          <Menubar.Trigger>Profiles</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.RadioGroup value="benoit">
              <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>

              <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>

              <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
            </Menubar.RadioGroup>
            <Menubar.Separator />
            <Menubar.Item inset>Edit...</Menubar.Item>
            <Menubar.Separator />
            <Menubar.Item inset>Add Profile...</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar.Root>
      <div className="p-12 flex flex-col gap-4">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

const ProjectItem = ({
  image,
  title,
  dueIn,
}: {
  image: string;
  title: string;
  dueIn: string;
}) => {
  return (
    <div className="bg-base-2 text-base-content p-4">
      <div className="">Project 1</div>
    </div>
  );
};
