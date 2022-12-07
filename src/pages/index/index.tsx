import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Item, List, Link, Image, Input } from "$uikit/index";
import {
  DocumentIcon,
  KeyIcon,
  MagnifyingGlassIcon,
  MapIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const Index = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-sm bg-gray-100">
      <h6 className="font-medium">React TS Starter Kit</h6>
      <span className="font-medium text-gray-400">
        by{" "}
        <a target="_blank" href="https://abilov.az" className="text-indigo-400">
          @abilovelchin
        </a>
      </span>
      <span className="mt-3 text-gray-400 border p-2 rounded">
        Example
        <RouterLink to="/users" className="text-blue-400 underline mx-2">
          Users
        </RouterLink>
        page
      </span>

      <br />

      <div className="flex flex-col gap-6">
        {/* Buttons */}
        <div className="flex gap-5 items-center">
          <Button
            type="primary"
            icon={<PlusIcon className="w-4 h-4" />}
            size="lg"
            onClick={() => console.log("clicked")}
          >
            Yadda saxla
          </Button>
          <Button type="danger" size="xl">
            Yadda saxla
          </Button>
          <Button type="secondary" loading>
            Yadda saxla
          </Button>
          <Button type="link">Yadda saxla</Button>
          <Button type="muted">Yadda saxla</Button>
          <Button disabled>Yadda saxla</Button>
          <Button type="primary" shape="rounded">
            Delete
          </Button>
          <Button
            type="secondary"
            shape="circle"
            icon={<UserIcon className="w-5 h-5" />}
          />
        </div>
        {/* List */}
        <div className="flex gap-5 items-center">
          <List fullWidth>
            <Item>Xəritə</Item>
            <Item>Hesabatlar</Item>
            <Item>Profilim</Item>
          </List>
          <List type="primary" shape="rounded">
            <Item hasSub>
              <Link icon={<MapIcon className="w-4 h-4" />}>Xəritə</Link>
              <List as="sub" type="primary" shape="rounded">
                <Item>Hesabatlar</Item>
                <Item>Profilim</Item>
              </List>
            </Item>
            <Item hasSub icon={<MapIcon className="w-4 h-4" />}>
              Hesabatlar
              <List as="sub" type="primary" shape="rounded">
                <Item>Hesabatlar</Item>
                <Item>Profilim</Item>
              </List>
            </Item>
            <Item icon={<UserIcon className="w-4 h-4" />}>Profilim</Item>
          </List>
          <List type="secondary">
            <Item>Xəritə</Item>
            <Item>Hesabatlar</Item>
            <Item>Profilim</Item>
          </List>
        </div>

        {/* Image */}
        <div className="flex gap-5 items-center">
          <div className="flex flex-col w-[400px] shadow rounded bg-white">
            <Image src="https://picsum.photos/600/400" />
            <h1 className="font-semibold text-lg">React TS UI Kit</h1>
            <p></p>
          </div>
          <Image shape="circle" src="https://picsum.photos/100/100" />
        </div>

        {/* Input */}
        <div className="flex gap-5 items-center">
          <div className="w-1/2 bg-white">
            <Input
              size="sm"
              type="primary"
              prefix={<KeyIcon className="w-4 h-4" />}
              placeholder="Username"
            />
          </div>
          <div className="w-1/2 bg-white">
            <Input type="primary" placeholder="Username" />
          </div>
          <div className="w-1/2">
            <Input
              placeholder="Search"
              shape="rounded"
              suffix={<KeyIcon className="w-4 h-4" />}
            />
          </div>
          <div className="w-1/2">
            <Input
              shape="circle"
              className="p-5"
              size="sm"
              suffix={
                <Button
                  shape="circle"
                  type="muted"
                  icon={
                    <MagnifyingGlassIcon className="w-4 h-4 text-red-400" />
                  }
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
